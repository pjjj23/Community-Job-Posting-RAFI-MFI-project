using alay_trabaho_api.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Configure Entity Framework and the database context
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configure CORS for the web app
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // Change this to your React app's URL
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add Swagger for API documentation
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Use Swagger in development environment
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Enable CORS
app.UseCors("AllowReactApp");

app.UseHttpsRedirection();

// Use static files if hosting the React app in the same project (optional)
app.UseDefaultFiles(); // Serves index.html by default if present
app.UseStaticFiles();

app.UseAuthorization();

// Map controllers for API routes
app.MapControllers();

// Optional: Redirect non-API routes to React app (for SPA handling)
app.MapFallbackToFile("index.html");

app.Run();
