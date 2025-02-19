import 'dart:convert';
import 'package:http/http.dart' as http;

class AuthService {
  // Update the base URL to match your local API setup
  final String _baseUrl =
      'http://10.0.2.2:5028/api/Users'; // Port updated to 5202

  /// Register a new user
  Future<String?> registerUser(Map<String, dynamic> userData) async {
    try {
      // Make the POST request to the API
      final response = await http.post(
        Uri.parse(_baseUrl),
        headers: {
          'Content-Type': 'application/json',
        },
        body: json.encode(userData), // Convert userData map to JSON
      );

      // Handle response
      if (response.statusCode == 201) {
        // Successful creation (HTTP 201)
        return null; // No error
      } else {
        // Handle error response
        final responseBody = json.decode(response.body);
        return responseBody['message'] ?? 'Registration failed.';
      }
    } catch (error) {
      // Handle exceptions
      return 'An error occurred: $error';
    }
  }
}
