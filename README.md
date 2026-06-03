# BOOKSTORE — Tài liệu Source Code

Website bán sách trực tuyến thuần HTML/CSS/JavaScript. Toàn bộ dữ liệu được lưu trữ trên `localStorage` của trình duyệt, không cần backend hay database.

---

## Cấu trúc thư mục

```
/
├── index.html                  # Trang chủ
├── danh-muc-sach.html          # Danh mục & tìm kiếm sách
├── chi-tiet-sach.html          # Chi tiết một cuốn sách
├── gio-hang-thanh-toan.html    # Giỏ hàng & thanh toán
├── dang-nhap-dang-ky.html      # Đăng nhập / Đăng ký
├── trang-ca-nhan.html          # Trang cá nhân người dùng
├── blog-review-sach.html       # Danh sách bài blog
├── blog-chi-tiet.html          # Nội dung chi tiết một bài blog
├── chinh-sach.html             # Chính sách bảo mật & đổi trả
├── dieu-khoan.html             # Điều khoản dịch vụ
├── lien-he.html                # Liên hệ
│
├── admin-dashboard.html        # Trang tổng quan Admin
├── admin-san-pham.html         # Quản lý sản phẩm (CRUD)
├── admin-don-hang.html         # Quản lý đơn hàng
├── admin-khach-hang.html       # Quản lý khách hàng
├── admin-bao-cao.html          # Báo cáo thống kê
│
├── css/
│   └── main.css                # CSS tùy chỉnh bổ sung
├── js/
│   └── app.js                  # Toàn bộ logic JavaScript dùng chung
│
├── netlify.toml                # Cấu hình deploy Netlify
└── .gitignore
```

---

## Công nghệ sử dụng

| Thành phần | Công nghệ |
|---|---|
| Giao diện | HTML5 + [Tailwind CSS](https://tailwindcss.com) (CDN) |
| Logic | Vanilla JavaScript (ES6+) |
| Lưu trữ dữ liệu | `localStorage` của trình duyệt |
| Icon | Google Material Symbols |
| Font chữ | Playfair Display (tiêu đề), Inter (nội dung) |
| Deploy | Netlify |

---

## File chính: `js/app.js`

Đây là file JavaScript duy nhất dùng chung cho toàn bộ website. Tất cả các trang HTML đều `<script src="js/app.js">` ở đầu.

---

### 1. Dữ liệu mặc định (Default Data)

Khi người dùng truy cập lần đầu, các hằng số sau được nạp vào `localStorage`:

#### `DEFAULT_BOOKS` — Danh sách 15 cuốn sách
```js
{ id, title, author, price, oldPrice, discount, category, image, stock, bestseller }
```
- `category`: `"skills"` | `"literature"` | `"academic"` | `"children"`
- `discount`: phần trăm giảm giá (0 = không giảm)
- `bestseller`: `true/false` — dùng để lọc và hiển thị nhãn

#### `DEFAULT_USERS` — 1 tài khoản khách hàng demo
```js
{ username, password, name, phone, dob }
```

#### `DEFAULT_ORDERS` — 2 đơn hàng mẫu
```js
{ id, date, total, itemsCount, status, customerEmail, items: [{ id, title, quantity, price }] }
```

#### `DEFAULT_BLOG_POSTS` — 6 bài viết blog
```js
{ id, title, excerpt, content, author, date, category, bookId, image, readTime }
```

#### `BOOK_REVIEWS` — Nhận xét mặc định cho sách
```js
{ author, rating, text }
```

#### `CHAT_FAQ` — Kịch bản trả lời chatbot
```js
{ keywords: [...], reply: "..." }
```
Khi người dùng nhập tin nhắn, hệ thống so khớp từ khóa và trả lời tự động.

---

### 2. Khởi tạo dữ liệu — `initLocalStorage()`

```js
function initLocalStorage()
```

Chạy **ngay khi file app.js được load**. Kiểm tra từng key trong localStorage, nếu chưa có thì ghi dữ liệu mặc định vào. Đảm bảo website luôn có dữ liệu để hiển thị ngay cả lần đầu mở.

---

### 3. Nhóm hàm CRUD LocalStorage

Mỗi loại dữ liệu có cặp `get/save`:

| Hàm | Mô tả |
|---|---|
| `getBooks()` | Lấy danh sách sách từ localStorage |
| `saveBooks(books)` | Lưu danh sách sách |
| `getCart()` | Lấy giỏ hàng hiện tại |
| `saveCart(cart)` | Lưu giỏ hàng + cập nhật badge số lượng |
| `getCurrentUser()` | Lấy thông tin người dùng đang đăng nhập |
| `saveCurrentUser(user)` | Lưu user (truyền `null` để đăng xuất) |
| `getOrders()` | Lấy danh sách đơn hàng |
| `saveOrders(orders)` | Lưu đơn hàng |
| `getUsers()` | Lấy danh sách tài khoản |
| `saveUsers(users)` | Lưu danh sách tài khoản |
| `getWishlist()` | Lấy danh sách yêu thích (mảng id sách) |
| `saveWishlist(list)` | Lưu danh sách yêu thích |
| `getBlogPosts()` | Lấy danh sách bài blog |
| `getBlogPost(id)` | Lấy một bài blog theo id |

---

### 4. Xác thực người dùng

#### `loginUser(email, password)` → `{ success, user, isAdmin, message }`
- Trường hợp đặc biệt: email `admin` hoặc `admin@bookstore.com` + password `admin123` → đăng nhập Admin
- Tìm kiếm user trong `localStorage` (so sánh không phân biệt hoa thường)
- Lưu user vào `currentUser` trong localStorage
- Trả về `{ success: false, message }` nếu sai tài khoản/mật khẩu

#### `registerUser(email, password, name)` → `{ success, user, message }`
- Kiểm tra email đã tồn tại chưa
- Tạo user mới, thêm vào danh sách, tự động đăng nhập

#### `requireAdmin()`
- Nếu user không phải admin → chuyển hướng về trang đăng nhập
- Dùng ở đầu mỗi trang admin để bảo vệ

---

### 5. Giỏ hàng

#### `addToCart(bookId, quantity = 1)`
- Tìm sách theo id
- Nếu đã có trong giỏ → cộng thêm số lượng; nếu chưa có → thêm mới
- Gọi `saveCart()` và hiển thị toast thông báo

#### `removeFromCart(bookId)`
- Lọc bỏ sách khỏi giỏ hàng

#### `updateCartQuantity(bookId, change)`
- Thay đổi số lượng (`+1` hoặc `-1`)
- Nếu số lượng về 0 → tự động xóa khỏi giỏ

#### `clearCart()`
- Xóa toàn bộ giỏ hàng

#### `updateCartBadges()`
- Tính tổng số lượng item trong giỏ
- Cập nhật số hiển thị trên icon giỏ hàng ở navbar

---

### 6. Danh sách yêu thích

#### `toggleWishlist(bookId)` → `boolean` (true = đã thêm, false = đã xóa)
- Nếu sách đã trong wishlist → xóa ra; nếu chưa → thêm vào
- Hiển thị toast thông báo tương ứng

#### `isInWishlist(bookId)` → `boolean`
- Kiểm tra nhanh xem sách có trong wishlist không

#### `removeFromWishlist(bookId)`
- Xóa trực tiếp khỏi wishlist (không hiển thị toast)

---

### 7. Lọc và tìm kiếm sách

#### `filterBooks(books, options)` → mảng sách đã lọc

```js
filterBooks(books, {
  search: "string",       // tìm theo tên sách hoặc tác giả
  category: "skills",     // lọc theo thể loại
  filter: "bestseller",   // "bestseller" | "new" | "deals"
  maxPrice: 200000        // lọc theo giá tối đa
})
```

- `filter: "new"` → sách có `stock >= 20`
- `filter: "deals"` → sách có `discount > 0`

---

### 8. Hiển thị sách — `renderBookCard(book, layout)`

Render HTML cho một card sách. Hỗ trợ 3 layout:

| Layout | Dùng ở đâu | Đặc điểm |
|---|---|---|
| `'grid'` (default) | Trang danh mục | Card đầy đủ thông tin, nút "Thêm vào giỏ" |
| `'flash'` | Flash Sale, Bestseller | Card nhỏ gọn, badge giảm giá nổi bật |
| `'carousel'` | Carousel gợi ý | Chỉ ảnh + tên + tác giả, hover overlay |

#### `renderHomeSections()`
Render 3 khu vực trên trang chủ:
- `#flash-sale-grid` — 5 sách có giảm giá cao nhất
- `#recommendations-carousel` — 5 sách ngẫu nhiên
- `#bestseller-grid` — Sách có `bestseller: true`

#### `renderWishlistTab(containerId)`
Render grid sách yêu thích trên trang cá nhân. Hiển thị thông báo trống nếu wishlist rỗng.

---

### 9. Thống kê Admin — `getReportStats()`

Tính toán các số liệu cho trang báo cáo:

```js
{
  totalRevenue,    // tổng doanh thu
  totalOrders,     // tổng số đơn
  totalUsers,      // tổng tài khoản
  lowStockCount,   // số sách sắp hết (stock < 10)
  monthlyRevenue,  // doanh thu 6 tháng gần nhất [{ label, value }]
  maxRev,          // giá trị max để tính tỷ lệ bar chart
  topBooks,        // top 5 sách bán chạy
  lowStock         // danh sách sách sắp hết hàng
}
```

Doanh thu theo tháng được tính bằng cách parse ngày từ chuỗi `"DD/MM/YYYY"` trong từng đơn hàng.

---

### 10. Admin Sidebar — `initAdminSidebar(activeId)`

Render toàn bộ sidebar cho các trang admin từ mảng `ADMIN_NAV_ITEMS`:

```js
[
  { id: 'dashboard', href: 'admin-dashboard.html', icon: 'dashboard', label: 'Tổng quan' },
  { id: 'products',  href: 'admin-san-pham.html',  icon: 'menu_book', label: 'Sản phẩm' },
  { id: 'orders',    href: 'admin-don-hang.html',  icon: 'shopping_bag', label: 'Đơn hàng' },
  { id: 'customers', href: 'admin-khach-hang.html',icon: 'group',     label: 'Khách hàng' },
  { id: 'reports',   href: 'admin-bao-cao.html',   icon: 'analytics', label: 'Báo cáo' }
]
```

- Item active được highlight bằng màu `primary-container`
- Trang Products có thêm nút "Thêm sách mới"
- Cuối sidebar hiển thị tên admin và nút Đăng xuất
- `initAdminLayout()` tự detect tên file hiện tại để biết trang nào đang active

---

### 11. UI Utilities

#### `showNotification(message)`
Toast notification xuất hiện ở góc dưới-trái:
- Tạo `div` động với animation slide-up
- Tự động biến mất sau 3 giây
- Dùng chung toàn bộ trang

#### `formatVND(amount)` → `"185.000đ"`
Format số thành tiền Việt Nam dùng `Intl.NumberFormat`.

#### `patchPersonClicks()`
Gán sự kiện cho icon `person` và `shopping_cart` trên navbar:
- `person` → chuyển đến trang cá nhân nếu đã đăng nhập, ngược lại đến trang đăng nhập
- `shopping_cart` → chuyển đến trang giỏ hàng

#### `initGlobalSearch()`
Bắt sự kiện Enter và click icon tìm kiếm trên tất cả input có placeholder "Tìm kiếm", redirect đến `danh-muc-sach.html?search=...`

#### `initMobileMenu()`
Tạo drawer menu cho mobile (inject vào DOM):
- Overlay bán trong suốt bên dưới
- Drawer từ trái trượt vào
- Đóng khi click overlay hoặc nút X

#### `initNewsletterForm()`
Xử lý form đăng ký newsletter ở footer: validate email, hiển thị toast thành công.

#### `initChatWidget()`
Chat widget ở góc dưới-phải:
- Toggle show/hide khi click nút chat
- Gửi tin nhắn → so khớp `CHAT_FAQ` → trả lời tự động sau 500ms
- Nếu không khớp → trả lời mặc định "Nhân viên sẽ phản hồi sớm"

#### `initSharedNav()`
Chuẩn hóa href cho các link điều hướng trong navbar (xử lý cả tiếng Anh lẫn tiếng Việt).

#### `fixFooterLinks()`
Map text link trong footer sang đúng URL. Tất cả link `href="#"` được trỏ về `lien-he.html`.

#### `getCustomerForOrder(order)`
Tìm tên khách hàng từ email trong đơn hàng. Trả về `{ name, email }`.

---

### 12. DOMContentLoaded — Khởi tạo toàn cục

Khi trang load xong, `app.js` tự động gọi:

```js
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadges();     // cập nhật số lượng giỏ hàng
    patchPersonClicks();    // gán sự kiện icon
    initGlobalSearch();     // kích hoạt tìm kiếm
    initMobileMenu();       // tạo mobile drawer
    initNewsletterForm();   // xử lý form newsletter
    initChatWidget();       // kích hoạt chatbot
    initSharedNav();        // fix nav links
    fixFooterLinks();       // fix footer links
    renderHomeSections();   // render sách trang chủ
    initAdminLayout();      // render sidebar admin
    // + inject link "Trang Quản Trị Admin" vào footer
});
```

---

## JavaScript inline trong từng trang HTML

Ngoài `app.js`, một số trang có JavaScript riêng trong thẻ `<script>` ở cuối file:

### `index.html` — Trang chủ
- **Chatbot toggle**: mở/đóng cửa sổ chat khi click nút
- **Countdown timer**: đếm ngược Flash Sale theo giây (`setInterval`)
- **Header scroll effect**: thêm class `shadow-md` khi scroll xuống > 20px

### `dang-nhap-dang-ky.html` — Đăng nhập / Đăng ký
- `toggleAuthMode()` — chuyển đổi giữa form đăng nhập và đăng ký với animation fade
- Submit form: gọi `loginUser()` hoặc `registerUser()` → redirect tương ứng
- `fillDemo(email, password)` — điền nhanh tài khoản demo vào form, highlight field bằng animation ring

### `danh-muc-sach.html` — Danh mục sách
- Đọc URL params: `?search=`, `?category=`, `?filter=`, `?page=`
- Render grid sách với phân trang
- Bộ lọc sidebar (thể loại, khoảng giá, tình trạng)
- Sort theo giá, tên, mức giảm giá

### `chi-tiet-sach.html` — Chi tiết sách
- Đọc `?id=` từ URL để tải đúng sách
- Render thông tin, reviews
- Nút thêm vào giỏ / yêu thích
- Hiển thị sách liên quan

### `gio-hang-thanh-toan.html` — Giỏ hàng & thanh toán
- Render danh sách sách trong giỏ
- Tính tổng tiền, áp dụng mã giảm giá
- Form nhập thông tin giao hàng
- Submit đơn hàng → lưu vào localStorage → clear giỏ

### `trang-ca-nhan.html` — Trang cá nhân
- Tab: Thông tin, Đơn hàng, Yêu thích
- Render lịch sử đơn hàng từ localStorage
- Gọi `renderWishlistTab()` để render sách yêu thích
- Cho phép chỉnh sửa thông tin cá nhân

### `admin-san-pham.html` — Quản lý sản phẩm
- Render bảng danh sách sách
- Modal thêm/sửa sách (CRUD hoàn chỉnh)
- Tìm kiếm sách theo tên

### `admin-don-hang.html` — Quản lý đơn hàng
- Render bảng đơn hàng với trạng thái
- Lọc theo trạng thái (Đang xử lý, Đã giao, ...)
- Cập nhật trạng thái đơn hàng

### `admin-khach-hang.html` — Quản lý khách hàng
- Render bảng danh sách user
- Xem lịch sử mua hàng của từng khách

### `admin-bao-cao.html` — Báo cáo thống kê
- Gọi `getReportStats()` để lấy số liệu
- Render bar chart doanh thu theo tháng (pure CSS/HTML)
- Hiển thị top sách bán chạy, sách sắp hết hàng

---

## Luồng dữ liệu tổng quát

```
localStorage
    ├── books        ← CRUD bởi admin-san-pham
    ├── users        ← thêm khi đăng ký, đọc khi đăng nhập
    ├── currentUser  ← lưu khi đăng nhập, xóa khi đăng xuất
    ├── cart         ← thay đổi khi thêm/xóa/thanh toán
    ├── orders       ← thêm mới khi đặt hàng thành công, CRUD bởi admin
    ├── wishlist     ← thêm/xóa từ trang chi tiết sách và trang cá nhân
    └── blogPosts    ← chỉ đọc (hiện tại chưa có CRUD blog từ admin)
```

---

## Tài khoản demo

| Vai trò | Email | Mật khẩu |
|---|---|---|
| Khách hàng | minh.nguyen@example.com | 123456 |
| Admin | admin@bookstore.com | admin123 |

> Dữ liệu được reset về mặc định nếu xóa localStorage của trình duyệt.
