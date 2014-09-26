#include<vector>
#include<stdio.h>
#include<iostream>
#include<algorithm>
#include<string>
using namespace std;
int main()
{
//    string tu="156498778";
//    int len=tu.length();
//    sort(tu.begin(),tu.end());
//    cout<<tu;
    //cout<<next_permutation();
    freopen("tt.txt","w",stdout);
    char ar[500];
    vector<string> vt;
    vector<string>::iterator a,b;

    FILE *fp;
    fp=fopen("wordlist.txt","r");
    while(fgets(ar,200,fp))
    vt.push_back(ar);

    fclose(fp);

    sort(vt.begin(),vt.end());
    a=vt.begin();
    b=vt.end();
    //vt[1]="123\n";

    string tmp,pp;
    for(int i=1;i<=10;i++)
    {
        cin>>tmp;
        sort(tmp.begin(),tmp.end());
        do
        {
            //cout<<tmp<<endl;
            pp=tmp+"\n";
            if(binary_search(vt.begin(),vt.end(),pp))
            {
                cout<<tmp<<",";
                break;
            }
        }
        while(next_permutation(tmp.begin(),tmp.end()));
    }

    return 0;
}










    //if(binary_search(vt.begin(),vt.end(),"avatar\n")) puts("123");
    //else puts("fd");
    //for(int i=0;i<100;i++)
    //cout<<vt[i]<<"";
