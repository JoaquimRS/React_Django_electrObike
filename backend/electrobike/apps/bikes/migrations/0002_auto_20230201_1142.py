# Generated by Django 3.2.16 on 2023-02-01 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bikes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bike',
            name='bike_plate',
            field=models.IntegerField(unique=True),
        ),
        migrations.AlterField(
            model_name='bike',
            name='slug',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]