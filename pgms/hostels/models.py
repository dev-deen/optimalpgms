from django.db import models

# Create your models here.
class Hostel(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    address = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()

class Pricing(models.Model):
    hostel = models.ForeignKey(Hostel, on_delete=models.CASCADE)
    room_type = models.CharField(max_length=255)
    price_per_day = models.DecimalField(max_digits=8, decimal_places=2)
    price_per_month = models.DecimalField(max_digits=8, decimal_places=2)
    advance_deposit = models.DecimalField(max_digits=8, decimal_places=2)

class Service(models.Model):
    hostel = models.ForeignKey(Hostel, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=False, null=False)
    description = models.TextField()


