from rest_framework import serializers
from .models import Service, Hostel, Pricing

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['__all__']

class PricingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['__all__']

class HostelSerializer(serializers.ModelSerializer):
    services = ServiceSerializer(many=True, read_only=True)
    pricing =  PricingSerializer(many=True, read_only=False)
    class Meta:
        model = Service
        fields = ['name', 'address', 'latitude', 'longitude', 'services', 'pricing']
