from django.shortcuts import render


def home(a):
    return render(a, 'home.html')


def options(a):
    return render(a, 'options.html')


def signup(a):
    return render(a, 'signup.html')


def bad_slots(a):
    return render(a, 'bad-slots.html')


def tt_slots(a):
    return render(a, 'tt-slots.html')
