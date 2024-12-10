namespace FinanTrack.Auth.ViewModels
{
    public record struct ConnectViewModel
    {
        public string Username { get; init; }
        public string Password { get; init; }
    }
}