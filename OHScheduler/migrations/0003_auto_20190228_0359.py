# Generated by Django 2.1.4 on 2019-02-28 03:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('OHScheduler', '0002_auto_20190228_0335'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='AuthUser',
            field=models.OneToOneField(help_text="Django 'User' object used for authorization - if adding new must press + button then edit button to input first&last name", on_delete=django.db.models.deletion.CASCADE, related_name='schedemp', to=settings.AUTH_USER_MODEL),
        ),
    ]
