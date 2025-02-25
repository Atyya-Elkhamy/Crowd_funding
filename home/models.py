from django.db import models

class Users(models.Model):
    id = models.AutoField(primary_key=True)
    f_name = models.CharField(max_length=100)
    l_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True, db_index=True)
    password = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    class Meta:
        db_table = "users"
    def __str__(self):
        return self.f_name

class Projects(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100,null=False, blank=False)
    details = models.TextField(null=False, blank=False)
    total_target = models.IntegerField()
    start_date = models.DateField()
    end_date = models.DateField()
    user = models.ForeignKey(Users,on_delete=models.CASCADE,related_name='projects')
    class Meta:
        db_table = "projects"


    
# Create your models here.
