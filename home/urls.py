from django.urls import path
from . import views

urlpatterns = [
    path("register/",views.start_page,name="page1"),
    path("projects/",views.pro_page,name="page2"),
    path("login/",views.log_in,name="login"),
    path("get_all_users/",views.get_all_users,name="all_users"),

]