# Generated by Django 2.1.4 on 2019-03-14 06:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('OHTruck', '0014_auto_20190307_0603'),
    ]

    operations = [
        migrations.AlterField(
            model_name='requesteddonation',
            name='ItemLocation',
            field=models.CharField(blank=True, choices=[('OUT', 'Outside location of residence (pickups clearly marked)'), ('INF', 'Inside residence (first floor/garage)'), ('INU', 'Inside residence (upper floor)')], help_text='Where items are located/should be delivered to', max_length=3, null=True),
        ),
        migrations.AlterField(
            model_name='requesteddonation',
            name='RequestedTimeframe',
            field=models.DateTimeField(blank=True, help_text='When would be best to complete this request', null=True),
        ),
    ]
