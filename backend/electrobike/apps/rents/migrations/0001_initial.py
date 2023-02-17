# Generated by Django 3.2.18 on 2023-02-17 15:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('clients', '0001_initial'),
        ('bikes', '0001_initial'),
        ('slots', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Rent',
            fields=[
                ('id_rent', models.CharField(max_length=25, primary_key=True, serialize=False)),
                ('status', models.CharField(max_length=100)),
                ('get_at', models.DateTimeField(blank=True, null=True)),
                ('leave_at', models.DateTimeField(blank=True, null=True)),
                ('kms', models.FloatField(blank=True, null=True)),
                ('bike', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='bikes.bike')),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='clients.client')),
                ('get_slot', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='get_slot', to='slots.slot')),
                ('leave_slot', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='leave_slot', to='slots.slot')),
            ],
            options={
                'db_table': 'rents',
            },
        ),
    ]
