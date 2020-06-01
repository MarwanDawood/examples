// Erase-Remove idiom is used for Sequence contatiner (vector and deque)

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main(void)
{
	vector<int> v;
	v.push_back(40);
	v.push_back(20);
	v.push_back(30);
	v.push_back(40);
	v.push_back(40);
	v.push_back(60);
	v.push_back(70);

	//v.erase(v.begin()+3, v.begin()+4);
	
	//only removes the value 40 starting from address 3 but the array size is not changed	
	cout<<"size of vector before remove: "<<v.size()<<endl;
	auto itrbegin = std::remove(v.begin()+3, v.end(),40);
	cout<<"size of vector after remove: "<<v.size()<<endl;
	
	v.erase(itrbegin, v.end());
	//v.erase(std::remove(v.begin()+3, v.end(),40), v.end());
	cout<<"size of vector after erase: "<<v.size()<<endl;

	for (auto &val: v)
		cout<<"vector val:"<<val<<endl;
	return 0;
}
