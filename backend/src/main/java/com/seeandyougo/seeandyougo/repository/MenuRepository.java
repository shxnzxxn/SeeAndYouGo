package com.seeandyougo.seeandyougo.repository;

import com.seeandyougo.seeandyougo.table.Menu;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class MenuRepository {
    private final EntityManager em;

    public void save(Menu menu){em.persist(menu);}

    public void saveAll(List<Menu> menuList){
        for(Menu menu : menuList){
            em.persist(menu);
        }
    }
}
