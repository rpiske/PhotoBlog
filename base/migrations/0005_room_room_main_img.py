# Generated by Django 3.2.9 on 2021-12-01 20:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_alter_message_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='room_main_img',
            field=models.ImageField(default='', upload_to='images/'),
        ),
    ]
