# Generated by Django 3.2.16 on 2023-02-02 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='email',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
