import requests
from bs4 import BeautifulSoup
import pandas as pd

def scrape_disease_data(country):
    # Replace 'YOUR_URL_HERE' with the actual URL of the website containing disease data for the given country.
    url = 'YOUR_URL_HERE'

    # Send an HTTP request to the website
    response = requests.get(url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the HTML content of the page
        soup = BeautifulSoup(response.text, 'html.parser')

        # Extract relevant data from the HTML (adjust this based on the website structure)
        # Example: Extracting disease names and prevalence
        disease_names = [element.text for element in soup.find_all('div', class_='disease-name')]
        disease_prevalence = [element.text for element in soup.find_all('div', class_='prevalence')]

        # Create a DataFrame to hold the data
        data = pd.DataFrame({'Disease': disease_names, 'Prevalence': disease_prevalence})

        # Save the data to a local file (adjust the filename and format as needed)
        data.to_csv('disease_data.csv', index=False)

        # Perform some basic analysis (replace this with your specific analysis)
        analysis_result = f"Analysis for {country}: {len(data)} diseases found."

        return analysis_result

    else:
        return f"Failed to fetch data. Status code: {response.status_code}"

# Example usage:
country_input = "Your_Country_Name"
result = scrape_disease_data(country_input)
print(result)
