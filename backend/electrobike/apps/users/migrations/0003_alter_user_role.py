# Generated by Django 3.2.17 on 2023-02-07 19:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_rename_charge_user_role'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.CharField(choices=[('ADMIN', 'ADMIN'), ('MANAGER', 'MANAGER'), ('EMPLOYEE', 'EMPLOYEE')], max_length=100),
        ),
    ]
