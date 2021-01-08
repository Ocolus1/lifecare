from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from main.views import FeedbackViewset, index

router = DefaultRouter()
router.register('api', FeedbackViewset, basename="apiview")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('view/', include(router.urls)),
    path("", index, name="index")
]

