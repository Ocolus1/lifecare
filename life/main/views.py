from django.shortcuts import render
from rest_framework import viewsets
from .serializers import feedbackSerializers
from .models import Feedback

# Create your views here.

class FeedbackViewset(viewsets.ModelViewSet):
    serializer_class = feedbackSerializers
    queryset = Feedback.objects.all()


def index(request):
    return render(request, "main/index.html", {})