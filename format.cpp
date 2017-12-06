#include <iostream>
#include <fstream>

using namespace std;

int main(int argc, char* argv[]) {
    ifstream dict(argv[1]);
    ofstream out(argv[2]);

    cout << "Working" << endl;

    out << '{' << endl;
    string word;
    while(dict >> word) {
        out << "\t\"" << word << "\"," << endl;
    }
    out << '}' << endl;
}