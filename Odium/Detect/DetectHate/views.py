import json
from django.http import Http404,HttpResponse
from django.views.decorators.csrf import csrf_exempt
import sentiment_mod as s

@csrf_exempt
def sentiment(request):
	var=request.POST.get('number')
	var=s.sentiment(var)
	data={}
	data['number']=var
	return HttpResponse(json.dumps(data),content_type='application/json')


