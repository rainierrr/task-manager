from django.db import models

# Create your models here.
class Task(models.Model):
	name = models.CharField(max_length=50)
	completed = models.BooleanField(default=False)
	priority = models.CharField(max_length=50, blank=True, null=True)
	category = models.CharField(max_length=50, blank=True, null=True)
	date = models.DateTimeField(blank=True, null=True)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	def __str__ (self):
		return self.name