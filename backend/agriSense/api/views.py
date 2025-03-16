from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ml_model.model import predict_phosphorus 

@api_view(['GET'])
def home(request):
    return Response({'message': 'Welcome to AgriSense API'})

@api_view(['GET'])
def get_Lat_Long(request):  # Ensure this view is wrapped with @api_view
    latitude = request.GET.get('latitude')  # Use request.GET instead of query_params
    longitude = request.GET.get('longitude')

    if latitude is None or longitude is None:
        return Response({'error': 'Please provide both latitude and longitude'}, status=400)
    
    latitude = float(latitude)
    longitude = float(longitude)
    phosphorus_content = predict_phosphorus(longitude, latitude)
    
    return Response({'phosphorus_content': phosphorus_content})
