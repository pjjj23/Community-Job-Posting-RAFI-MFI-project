import 'package:http/http.dart' as http;
import 'dart:convert';

class LoginApi {
  // Base URL with the correct /Login endpoint
  static const String _baseUrl = 'http://10.0.2.2:5028/api/Users/login';

  /// Log in a user
  static Future<Map<String, dynamic>> loginUser({
    required String email,
    required String password,
  }) async {
    try {
      // Build the full request URL
      final Uri url = Uri.parse(_baseUrl);

      // Make the POST request to the API
      final response = await http.post(
        url,
        headers: {
          'Content-Type':
              'application/json', // Ensures JSON format is specified
        },
        body: json.encode({
          'email': email,
          'password': password,
        }),
      );

      // Parse and handle the response
      if (response.statusCode == 200) {
        // If the response is successful, parse the JSON data
        final data = json.decode(response.body);
        return {
          'success': true,
          'data': data, // Return the user data or token from the API
        };
      } else if (response.statusCode == 401) {
        // Handle invalid login credentials (unauthorized)
        return {
          'success': false,
          'message': 'Invalid email or password.',
        };
      } else {
        // Handle other error statuses and parse the error message
        final responseBody = json.decode(response.body);
        return {
          'success': false,
          'message': responseBody['message'] ?? 'An unexpected error occurred.',
        };
      }
    } catch (e) {
      // Handle network or other exceptions
      return {
        'success': false,
        'message': 'An error occurred: $e',
      };
    }
  }
}
