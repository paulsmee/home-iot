#include <DHT.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <ArduinoJson.h>

#define DHTPIN D2
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
 
const char* ssid = "<YourSSID>";
const char* password = "<NetworkPassword>";
 
WiFiServer server(80);
 
void setup() {
  Serial.begin(115200);
  delay(10);
  dht.begin();
  
  // Connect to WiFi network
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
 
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
 
  // Start the server
  server.begin();
  Serial.println("Server started");
 
  // Print the IP address
  Serial.print("Use this URL : ");
  Serial.print("http://");
  Serial.print(WiFi.localIP());
  Serial.println("/");
 
}
 
void loop() {
////////////////////////////////////////////

 // DHT Stuff
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  if (isnan(h) || isnan(t))
  {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status
 
    // Prepare JSON document
DynamicJsonDocument doc(2048);
doc["temperature"] = t;
doc["humidity"] = h;

// Serialize JSON document
String body;
serializeJson(doc, body);

HTTPClient http;

// Send request

http.begin("http://192.168.1.195:8080/sensor/temperature/livingroom"); 
http.addHeader("Content-Type", "application/json");
http.POST(body);

// Read response
Serial.print(http.getString());

// Disconnect
http.end();
 
  delay(300000);


}
}