## Infite scroll feature


## Key Points in the Code:
> Fetching Data:

- The fetchPosts function fetches 10 posts at a time using the _limit and _page query parameters.
- `Infinite Scrolling`:

- The handleScroll function checks if the user is near the bottom of the page and increments the page state to fetch more data.
- State Management:

posts: Stores the fetched posts.
page: Tracks the current page.
loading: Prevents multiple simultaneous requests.
hasMore: Tracks whether more data is available.
Cleanup:

- The useEffect hook ensures that the scroll event listener is cleaned up to prevent memory leaks.
