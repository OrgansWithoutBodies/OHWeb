# Generated by Django 2.1.4 on 2019-02-15 01:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('OHTruck', '0003_auto_20190215_0120'),
    ]

    operations = [
        migrations.AddField(
            model_name='truck',
            name='CabSpots',
            field=models.IntegerField(default=2),
        ),
    ]
