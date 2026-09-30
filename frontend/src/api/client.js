import $ from "jquery";

export function healthCheck() {
    return $.ajax({
        url: "/api/health",
        method: "GET",
    });
}