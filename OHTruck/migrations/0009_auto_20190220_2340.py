# Generated by Django 2.1.4 on 2019-02-20 23:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('OHTruck', '0008_auto_20190220_2339'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stop',
            name='ScheduledOrder',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
