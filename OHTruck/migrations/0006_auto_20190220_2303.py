# Generated by Django 2.1.4 on 2019-02-20 23:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('OHTruck', '0005_auto_20190220_2256'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='donation',
            name='StopId',
        ),
        migrations.AddField(
            model_name='requesteddonation',
            name='StopId',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='OHTruck.Stop'),
        ),
        migrations.AddField(
            model_name='requesteddonation',
            name='Timestamp',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='takendonation',
            name='StopId',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='OHTruck.Stop'),
        ),
        migrations.AddField(
            model_name='takendonation',
            name='Timestamp',
            field=models.DateTimeField(null=True),
        ),
        migrations.DeleteModel(
            name='Donation',
        ),
    ]
