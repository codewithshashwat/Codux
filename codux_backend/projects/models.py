from django.db import models
from django.contrib.auth.models import User

class Project(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    tech_stack = models.CharField(max_length=100)
    live_link = models.URLField(blank=True, null=True)
    repo_link = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
