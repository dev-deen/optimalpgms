from django.urls import path
from .views import hostel_list, hostel_detail
urlpatterns = [
    path('', hostel_list, name='hostel_list'),
    path('<int:pk>', hostel_detail, name='hostel_details')
]