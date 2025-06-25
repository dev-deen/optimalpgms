from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .models import Hostel
from .serializers import HostelSerializer
# Create your views here.
class HostelView(APIView):

    def get(self, request):
        hostels = Hostel.objects.all()
        serializer = HostelSerializer(hostels, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

hostel_list = HostelView.as_view()

class HostelDetail(APIView):

    def get_object(self, pk):
        return get_object_or_404(Hostel, pk)

    def get(self, request, pk):
        hostel = self.get_object(pk)
        serializer = HostelSerializer(hostel)
        return Response(serializer.data, status=status.HTTP_200_OK)

hostel_detail = HostelDetail.as_view()