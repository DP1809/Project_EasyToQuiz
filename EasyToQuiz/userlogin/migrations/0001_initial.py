# Generated by Django 3.1.6 on 2021-03-10 10:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='option_data',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('option', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Question_data',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qtitle', models.CharField(max_length=500)),
                ('qtype', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='quiz_data',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quiztitle', models.CharField(max_length=40)),
                ('description', models.CharField(max_length=1000)),
                ('username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='user_signup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=20)),
                ('emailid', models.CharField(max_length=40)),
                ('password', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='response_data',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='userlogin.option_data')),
                ('questionid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='userlogin.question_data')),
                ('quizid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='userlogin.quiz_data')),
                ('userid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='question_data',
            name='quizid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='userlogin.quiz_data'),
        ),
        migrations.AddField(
            model_name='option_data',
            name='questionid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='userlogin.question_data'),
        ),
        migrations.AddField(
            model_name='option_data',
            name='quizid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='userlogin.quiz_data'),
        ),
    ]
