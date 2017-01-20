from django.contrib import admin
from .models import Jobs
# Register your models here.

class JobsAdmin(admin.ModelAdmin):
    model = Jobs
    list_display= ("job", "tag")
    search_fields= ("job", "tag")

admin.site.register(Jobs, JobsAdmin)
