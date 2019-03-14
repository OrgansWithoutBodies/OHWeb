# Generated by Django 2.1.4 on 2019-03-12 05:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('OHClock', '0003_auto_20190312_0545'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='AuthUser',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='OHClock_Employee', serialize=False, to=settings.AUTH_USER_MODEL),
        ),
    ]