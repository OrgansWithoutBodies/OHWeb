# Generated by Django 2.1.4 on 2019-02-28 04:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('OHScheduler', '0003_auto_20190228_0359'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='id',
        ),
        migrations.AlterField(
            model_name='employee',
            name='AuthUser',
            field=models.OneToOneField(help_text="Django 'User' object used for authorization - if adding new must press + button then edit button to input first&last name", on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='schedemp', serialize=False, to=settings.AUTH_USER_MODEL),
        ),
    ]