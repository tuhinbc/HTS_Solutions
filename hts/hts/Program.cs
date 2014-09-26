using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace hts
{
    class Program
    {
        static void Main(string[] args)
        {
            string data=File.ReadAllText
                (@"G:\Laboratory\Hack this Site\hts\app\app1win\app1win.exe");

            int length = data.Length-1000,new_start=0,ct=0;
            Console.WriteLine("yyyyyyy");
            for (int i = 100; i < length; i++)
            {
                if (char.IsDigit(data[i]))
                {
                    ct = 1;
                    for (int t = i+1; t < i+10; t++)
                    {
                        if (char.IsDigit(data[t]))
                        {
                            ct++;
                        }
                        else if (data[t] == '-')
                        {
                            Console.WriteLine(t.ToString());
                            Console.ReadLine();
                        }
                        else break;
                    }
                    if (ct > 3) Console.WriteLine(ct.ToString());
                    //new_start = 0;
                    //while (char.IsLetterOrDigit(data[i]))
                    //{
                    //    new_start++;
                    //    i++;
                    //}
                    //if (new_start > 8)
                    //{
                    //if(ct>5)    Console.WriteLine(data.Substring(10,i));
                    //}
                }
            }
            //Console.WriteLine("yyyyyyy");
        }
    }
}
