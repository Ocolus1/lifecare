from django.db import models

# Create your models here.
class Feedback(models.Model):
    name = models.CharField(max_length=150)
    company = models.CharField(max_length=200)
    email = models.EmailField(max_length=225)
    phone = models.IntegerField()
    body = models.TextField()


    def __str__(self):
        return self.company
