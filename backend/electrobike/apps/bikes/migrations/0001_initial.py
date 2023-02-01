# Generated by Django 3.2.16 on 2023-02-01 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bike',
            fields=[
                ('id_bike', models.CharField(max_length=25, primary_key=True, serialize=False)),
                ('slug', models.CharField(max_length=100)),
                ('bike_plate', models.IntegerField()),
            ],
            options={
                'db_table': 'bikes',
            },
        ),
    ]
