# Generated by Django 3.2.16 on 2023-02-01 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Station',
            fields=[
                ('id_station', models.CharField(max_length=25, primary_key=True, serialize=False)),
                ('slug', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('lat', models.DecimalField(decimal_places=6, max_digits=8)),
                ('long', models.DecimalField(decimal_places=6, max_digits=9)),
                ('img', models.TextField()),
            ],
            options={
                'db_table': 'stations',
            },
        ),
    ]
