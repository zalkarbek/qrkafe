<template>
  <div>
    <div class="nk-sidebar-main-content">
      <!--<<SIDEBAR-ORDERS-LISTS-->
      <table class="table table-sm table-hover">
        <thead class="thead-dark">
        <tr class="text-left">
          <th scope="col" style="width: 60%">Наименование</th>
          <th scope="col" style="width: 24%">Кол-во</th>
          <th scope="col">Цена</th>
          <th scope="col">Итого</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Лагман Лапшоный</td>
          <td>36</td>
          <td>965.23</td>
          <td>
            <span class="text-danger">6354.75</span>
          </td>
        </tr>
        <tr>
          <td>Салат из греческого ореха</td>
          <td>36</td>
          <td>245.45</td>
          <td>
            <span class="text-danger">6354.75</span>
          </td>
        </tr>
        <tr>
          <td>Салат Ассорти</td>
          <td>36</td>
          <td>335</td>
          <td>
            <span class="text-danger">6354.75</span>
          </td>
        </tr>
        <tr>
          <td>Шаурма два друга</td>
          <td>36</td>
          <td>130.5</td>
          <td>
            <span class="text-danger">6354.75</span>
          </td>
        </tr>
        </tbody>
      </table>
      <!--SIDEBAR-ORDERS-LISTS>>-->
    </div>


    <!--<<SIDEBAR-FOOTER-ELEMENT-->
    <div class="nk-sidebar-main-footer-fixed ml-2">
      <b-row>
        <b-col cols="12" class="mb-2">
          <span class="product-sum-text text-soft mr-2">Сумма:</span>
          <span class="products-sum-price text-danger">7 865 152,45 сом</span>
        </b-col>
        <b-col cols="12">
          <button class="btn btn-light mr-2">
            <i class="ni ni-setting products-footer-button-icon"></i>
          </button>
          <button class="btn btn-light mr-2">
            <i class="ni ni-printer products-footer-button-icon"></i>
          </button>
          <button class="btn btn-primary">
            <em class="icon fas fa-money-check"></em>
            <span>Оплатить</span>
          </button>
        </b-col>
      </b-row>

    </div>
    <!--FOOTER-ELEMENT>>-->
  </div>
</template>
