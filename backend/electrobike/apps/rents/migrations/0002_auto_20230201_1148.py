# Generated by Django 3.2.16 on 2023-02-01 11:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('slots', '0001_initial'),
        ('rents', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rent',
            name='get_slot',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='get_slot', to='slots.slot'),
        ),
        migrations.AlterField(
            model_name='rent',
            name='kms',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='rent',
            name='leave_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
