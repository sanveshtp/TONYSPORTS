from django.shortcuts import render


def home(a):
    return render(a, 'home.html')


def options(a):
    return render(a, 'options.html')


def signup(a):
    return render(a, 'signup.html')


def sports(a):
    return render(a, 'sports.html')


def bad_slots(a):
    return render(a, 'bad-slots.html')
