using EngTrain.Models;
using EngTrain.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace EngTrain.Admin
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private Level GetLevel(int position)
        {
            if (position <= 2500) return Level.Elementary;
            if (position <= 4500) return Level.Intermediate;
            if (position <= 6500) return Level.UpperIntermediate;
            return Level.Advanced;
        }

        private void btnUpload_Click(object sender, EventArgs e)
        {
            OpenFileDialog openDialog = new OpenFileDialog();
            if (openDialog.ShowDialog() == DialogResult.OK)
            {
                try
                {
                    Stream myStream = null;
                    if ((myStream = openDialog.OpenFile()) != null)
                    {
                        using (myStream)
                        using (var streamReader = new StreamReader(myStream))
                        {
                            EngTrainContext context = new EngTrainContext();
                            var csv = new CsvHelper.CsvReader(streamReader);
                            csv.Configuration.Delimiter = ";";
                            while (csv.Read())
                            {
                                var position = Convert.ToInt32(csv.GetField<string>("Position"));
                                var word = new Word()
                                {
                                    Value = csv.GetField<string>("Word").ToLower(),
                                    Position = position,
                                    Level = GetLevel(position)
                                };

                                context.Words.AddOrUpdate(
                                    p => p.Value,
                                    word
                                );

                            }
                            context.SaveChanges();
                            MessageBox.Show("Слова успешно добавлены");
                        }
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Error: Could not read file from disk. Original error: " + ex.Message);
                }
                
            }
        }
    }
}
