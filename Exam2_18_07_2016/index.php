<?php
require_once "engine.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>News</title>
    <!--    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">-->
    <link href="bootstrap.min.css" rel="stylesheet">
    <link href="main.css" rel="stylesheet">
</head>
<body>
<h3 class="text-center">News</h3>
<?php
$categories = getCategories();
$data = getData($currentCategory);

$totalPageCount = ceil(count($data) / ITEMS_PER_PAGE);
if ($currentPage > $totalPageCount) $currentPage--;

$start = ($currentPage - 1) * ITEMS_PER_PAGE;
$limit = ITEMS_PER_PAGE;
if($start+$limit > count($data)){
    $limit = count($data) - $start;
}
?>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <br>
                <ul class="nav nav-pills">
                
                <?php
                foreach ($categories as $category ){
                    echo '<li role="presentation" ';
                        if($currentCategory == $category['id']){
                            echo ' class="active"';
                        }
                    echo '><a href="index.php?currentCategory='.$category['id'].'">'.$category['category'].'</a></li>';
                }
                ?>
                </ul>


        <div class="col-md-9">


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
                for($i=$start; $i<$start+$limit; $i++){
                    echo '<tr><td>'.($i+1).'</td>';
                    echo '<td>'.$data[$i]['date'].'</td>';
                    echo '<td>'.$data[$i]['title'].'</td>';
                    echo '<td>'.$data[$i]['content'].'</td>';
                    echo '<td>'.getCategoryNameById($data[$i]['category_id']).'</td>';
                }
                ?>

                </tbody>
            </table>
        </div>
    </div>
</div>




<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="script.js"></script>
</body>
</html>