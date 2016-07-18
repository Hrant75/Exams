
    <h3 class="text-center">News</h3>
    <form action="admin.php">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>Date Created</th>
                <th>Title</th>
                <th>Content</th>
                <th>Category</th>
            </tr>
            </thead>
            <tbody>

            <?php
            $pageType = 'news';
            $categories = getCategories();
            echo '<br>';
            $data = getData();
            $totalPageCount = ceil(count($data) / ITEMS_PER_PAGE);
            if ($currentPage > $totalPageCount) $currentPage--;

            $start = ($currentPage - 1) * ITEMS_PER_PAGE;
            $limit = ITEMS_PER_PAGE;
            if($start+$limit > count($data)){
                $limit = count($data) - $start;
            }

            for($i=$start; $i<$start+$limit; $i++){
                echo '<tr><td>'.($i+1).'</td>';
                echo '<td>'.$data[$i]['date'].'</td>';
                echo '<td>'.$data[$i]['title'].'</td>';
                echo '<td>'.$data[$i]['content'].'</td>';
                echo '<td>'.getCategoryNameById($data[$i]['category_id']).'</td>';

                echo ' <td>';
                echo '<a href="admin.php?currentPage=' . $currentPage .'&pageType='.$pageType.'&delButton='. $data[$i]['id']. '" class="btn btn-default">Delete</a>';
                echo '</td> </tr>';
            }
            ?>

            </tbody>
        </table>
    </form>

<?php
include 'pagination.php';
?>