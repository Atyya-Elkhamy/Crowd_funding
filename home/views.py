from django.shortcuts import render , redirect
from django.http import HttpResponse
from django.contrib import messages
from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.views.decorators.http import require_GET
from django.core.serializers import serialize
from . models import Users 
from . models import Projects



def start_page(request):
    if request.method == "POST":
        f_name = request.POST.get("f_name")
        l_name = request.POST.get("l_name")
        email = request.POST.get("register_email")
        password = request.POST.get("register_password")
        phone = request.POST.get("phone")
        if Users.objects.filter(email=email).exists():
            return JsonResponse({"success": False, "message": "Email already registered!"})
        user = Users(f_name = f_name,l_name=l_name,email=email,password=password,phone=phone)
        user.save()
        return JsonResponse({"success": True, "message": "User registered successfully!"})

    return render(request,"home/main.html")

def pro_page(request):
    if request.method == "":
        title = request.POST.get("title")
        details = request.POST.get("details")
        cost = request.POST.get("cost")
        s_date = request.POST.get("s_date")
        e_date = request.POST.get("e_date")
        user = request.user
        project = Projects(user=user, title=title, details=details, total_target=cost, start_date=s_date, end_date=e_date)
        project.save()
    return render(request,"home/updateproject.html")

def log_in(request):
    if request.method == "POST":
        email = request.POST["email"]
        password = request.PSOT["password"]
        user = authenticate(request,email=email , password=password)
        if user is not None:
            request.session["user_id"] = user.id
            request.sessio["f_name"] = user.f_name
            request.session["email"] = user.email
            request.session["is_loged_in"] = True
            return redirect("home/updateproject.html")
        else:
            return render(request,"home/main.html",{"error":"invalid credentials"})
    return render(request,"home/main.html")

def user_data(request):
    if request.session.get("is_loged_in"):
        username = request.session.get("f_name")
        return render(request,"home/main.html",{"username":username})
    else:
        return redirect("home/updateproject.html")
    
def log_out(request):
    request.session.flush()
    return redirect("home/main.html")


@require_GET
def get_all_users(request):
    users = Users.objects.all()
    users_json = serialize('json', users)
    return JsonResponse(users_json, safe=False)



# Create your views here.
