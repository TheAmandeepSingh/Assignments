#include <iostream>
using namespace std;

class Base
{
protected:
    int a{};
    
public:
    int b{};
    Base() { cout << "Base constructor" << endl; }
   

    void fun() { cout << "Base Fun" << endl; }

    ~Base() { cout << "Base Destructor" << endl; }
};

class Derived : private Base
{
    int b{};

public:
    Derived() { cout << "Derived constructor" << endl; }
    ~Derived() {cout<< "Derived destructor" << endl;}
    void fun() { cout << "Derived fun" << endl; }
};

struct A
{
protected:
    ~A() = default; // based class has protected destructor
};

struct B : A
{
};

B b{}; // Well-formed?

int main()
{
    Base base;
    base.fun();

    Derived derived;
    derived.fun();

    return 0;
}