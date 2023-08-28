package com.seeandyougo.seeandyougo.service;

import com.seeandyougo.seeandyougo.dto.MenuResponse;
import com.seeandyougo.seeandyougo.repository.MenuRepository;
import com.seeandyougo.seeandyougo.table.Menu;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MenuService {
    private final MenuRepository menuRepository;
    private final CashService cashService;

    public List<MenuResponse> getRestaurantMenu(String name, String date){
        List<Menu> menusByNameAndDate = menuRepository.findMenusByNameAndDate(name, date);
        return cashService.processMenus(menusByNameAndDate);
    }
}
